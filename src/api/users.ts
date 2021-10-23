import { User } from 'types/user';

type Response = {
  result: {
    items: {
      code: string;
      name: string;
      photo: {
        normal: string;
      };
    }[];
  };
};
export const getUsers = async (): Promise<User[]> => {
  const response: Response = await kintone.api(
    /**
     * @deprecated Using informal kintone REST API.
     * Instead, an app should be created to store user icons.
     * */
    '/k/api/people/user/list',
    'POST',
    {}
  );
  return response.result.items.map(({ code, name, photo: { normal } }) => ({
    name,
    code,
    icon: normal,
  }));
};
