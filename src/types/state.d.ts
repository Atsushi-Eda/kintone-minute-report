import { User } from 'types/user';
import { Channel } from 'types/channel';
import { Message } from 'types/message';

export declare type State = {
  view: {
    users: User[];
    channels: Channel[];
    channelIndex: number;
    messages: Message[];
  };
  form: {
    messageContent: string;
  };
};
