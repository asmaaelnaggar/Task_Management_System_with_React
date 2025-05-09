import React, { createContext, useContext, useState } from 'react';

const DEFAULT_AVATAR = '/src/assets/images/Image.png';

// Export the AvatarContext
export const AvatarContext = createContext({
    avatar: DEFAULT_AVATAR,
    setAvatar: () => { },
    resetAvatar: () => { },
});

export const AvatarProvider = ({ children }) => {
    const [avatar, setAvatar] = useState(DEFAULT_AVATAR);

    const resetAvatar = () => {
        setAvatar(DEFAULT_AVATAR);
    };

    return (
        <AvatarContext.Provider value={{ avatar, setAvatar, resetAvatar }}>
            {children}
        </AvatarContext.Provider>
    );
};

export const useAvatar = () => useContext(AvatarContext);