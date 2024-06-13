import React, { useEffect, useState } from 'react';

import { CONSTANTS, PushAPI } from '@pushprotocol/restapi';
import { useActiveWeb3React } from '@/hooks/useActiveWeb3React';
import { ethers5Adapter } from 'thirdweb/adapters/ethers5';
import { client } from '@/constant/walletPrefrences';

const Test = () => {

    const { library, chain, account, wallet } = useActiveWeb3React();

    const [user, setUser] = useState()

    useEffect(() => {
        if (!chain) return;
        (async () => {
            try {
                const ethersSigner = await ethers5Adapter.signer.toEthers({
                    client: client,
                    chain,
                    account: wallet
                })
                const userAlice = await PushAPI.initialize(ethersSigner, {
                    env: 'staging',
                })
                setUser(userAlice);
                const stream = await userAlice.initStream([CONSTANTS.STREAM.NOTIF]);

                // Set stream event handling
                stream.on(CONSTANTS.STREAM.NOTIF, (data) => {
                    console.log(data);
                });

                // Connect to stream
                stream.connect()
            } catch (err) {
                console.log('err', err)
            }
        })()

    }, [chain, wallet]);


    useEffect(() => {
        if(!user || !account) return;
        (async () => {
            try {
                const aliceSubscriptions = await user.notification.subscriptions();
                
                
                if(!aliceSubscriptions.length) {
                    const res =  await user.notification.subscribe(`eip155:11155111:${'0x085426Ca3958bD760F4817f7cF139Ce0CbB9F7AF'}`, {
                        settings: [
                            // settings are dependent on channel
                            { enabled: true, value: '1' }, // setting 1
                            { enabled: false }, // setting 2
                            { enabled: true, value: '50' }, // setting 3
                          ],
                    });
                    console.log('res', res)
                }

                console.log('aliceSubscriptions', aliceSubscriptions)
            } catch (err) {
                console.log('err', err)
            }
        })()

    },[user, account])



    const sendNotification = async () => {
        try {
            if (!user) return;
            console.log('user', user)
            const apiResponse = await user.channel.send(['0x085426Ca3958bD760F4817f7cF139Ce0CbB9F7AF'], {
                notification: {
                    title: 'Oh',
                    body: 'Ohhhh',
                }
            })
        } catch (err) {
            console.log('err', err)
        }
    }
    return (
        <button onClick={sendNotification}>Test</button>
    )
}

export default Test