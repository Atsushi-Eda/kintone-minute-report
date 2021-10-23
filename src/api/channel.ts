import { Channel } from 'types/channel';

const getOrganizationsWithUserTitles = (userCode: string) =>
  kintone
    .api('/v1/user/organizations', 'GET', { code: userCode })
    .then(({ organizationTitles }) =>
      Promise.all(
        organizationTitles.map(({ organization }: any) =>
          kintone
            .api('/v1/organization/users', 'GET', { code: organization.code })
            .then(({ userTitles }) => ({ organization, userTitles }))
        )
      )
    );
const getUsers = () =>
  kintone.api('/v1/users', 'GET', {}).then(({ users }) => users);
export const getChannels = async (userCode: string): Promise<Channel[]> => {
  const [organizationsWithUsers, users] = await Promise.all([
    getOrganizationsWithUserTitles(userCode),
    getUsers(),
  ]);
  return [
    { name: '全て', users: null },
    ...organizationsWithUsers.map(({ organization, userTitles }: any) => ({
      name: organization.name,
      users: userTitles.map(({ user }: any) => user.code),
    })),
    { name: '自分', users: [userCode] },
    ...users
      .filter(
        ({ code }: { code: string }) =>
          !['Administrator', userCode].includes(code)
      )
      .map(({ name, code }: { name: string; code: string }) => ({
        name,
        users: [code],
      })),
  ];
};
