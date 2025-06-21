import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

@WebSocketGateway(3001, {})
export class ChatGateWay {
  @SubscribeMessage('message')
  handleNewMessage(@MessageBody() message: any) {
    console.log(message);
  }
}
