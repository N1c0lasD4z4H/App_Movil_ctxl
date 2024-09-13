import { Client, Account, Avatars, Databases, Query} from 'react-native-appwrite';

export const Config = {
    endpoint:'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.Ctxl',
    projectId: '66e3ac3e00043322838e',
    databaseId: '66e3c400002a936601c6',
    userCollectionId: '66e3c43d00092e514d49',
    videoCollectionId: '66e3c47c002890b5e7b9',
    storageId: '66e3cc46003e4751246d'
}

const client = new Client();

client
    .setEndpoint(Config.endpoint) 
    .setProject(config.projectId) 
    .setPlatform(Config.platform) 
;

const account = new Account(client);
const avatars = new Avatars (client);
const databases =  new  Databases (client);

export const  createUser = async (email, password, username ) => {
  try {
    const newAccount = await account.create(
        ID.unique(),
        email,
        password,
        username
    )

    if (!newAccount) throw Error;
    const avatarUrl = avatars.getInitials(username)

    await signIn(email, password)

    const newUser = await databases.createDocument(
        Config.databaseId,
        Config.userCollectionId,
        ID.unique(),{
            accountId: newAccount.$id,
            email,
            username,
            avatar: avatarUrl

        }
    )

    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export const signIn = async (email, password) =>{
    try {
        const session = await account.createEmailSession(email, password)

        return session; 
    } catch (error) {
        throw new Error(error);
    }
}

export const getCurrentUser = async () =>{
    try {
    const currentAccount = await account.get();

    if(!currentAccount) throw Error;

    const CurrentUser = await databases.listDocuments(
        Config.databaseId,
        Config.userCollectionId,
        [Query.equal ('accountId', currentAccount.$id)]
    )
    if (!CurrentUser) throw Error;

    return CurrentUser.documents[0];
    } catch (error) {
    console.log(error);
    }
}
