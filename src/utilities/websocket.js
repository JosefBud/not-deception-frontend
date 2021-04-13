const ws = new WebSocket(process.env.WEBSOCKET_URL || 'ws://192.168.1.21:8000');
export default ws;
