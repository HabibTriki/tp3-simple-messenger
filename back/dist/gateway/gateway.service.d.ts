import { Socket } from 'socket.io';
export declare class GatewayService {
    socket: Socket;
    handleMessage(body: any, client: Socket): void;
}
