export const constants = {
    socketUrl: 'https://gs-socket-server.herokuapp.com',
    socketNamespaces: {
        room: 'room',
        lobby: 'lobby'
    },
    peerConfig: Object.values({
        id: undefined,
         config: {
             host: 'gs-peerjs-server.herokuapp.com',
             secure: true,
             path: '/'
         }
    }),
    firebaseConfig: {
        apiKey: "AIzaSyBs_xQSVPT9nnDIl1-HyYV-Oix3nakYmf8",
        authDomain: "semanajsexpert.firebaseapp.com",
        projectId: "semanajsexpert",
        storageBucket: "semanajsexpert.appspot.com",
        messagingSenderId: "987218346946",
        appId: "1:987218346946:web:a4349fd0dd20f33c60cc5b"
    },
    pages: {
        lobby: '/pages/lobby',
        login: '/pages/login',
    },
    events: {
        USER_CONNECTED: 'userConnection',
        USER_DISCONNECTED: 'userDisconnection',

        JOIN_ROOM: 'joinRoom',
        LOBBY_UPDATED: 'lobbyUpdated',
        UPGRADE_USER_PERMISSION: 'upgradeUserPermission',

        SPEAK_REQUEST: 'speakRequest',
        SPEAK_ANSWER: 'speakAnswer'
    },
    storageKey:'thereAsBigKey:storage:user'
}