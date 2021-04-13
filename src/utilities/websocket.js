const ws = new WebSocket(process.env.WEBSOCKET_URL || 'wss://ws.notdeception.com:8000');
export default ws;
