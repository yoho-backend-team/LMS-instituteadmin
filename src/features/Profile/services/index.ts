import Client from '../../../api/index';

export const getAdminProfile = async () => {
    const response = await Client.admin.me()
    if (response) {
        return response;
    }
};
