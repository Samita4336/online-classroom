// zego.js module
import ZegoClient from 'zego-rtc-webrtc';

const appId = '946219318';
const appSecret = '8e0b853d79deae0bcbfe949b73ca46a4';

const zegoClient = new ZegoClient();
zegoClient.initSDK(appId, appSecret);

export default zegoClient;
