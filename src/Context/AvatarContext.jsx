import React, { createContext, useContext, useState } from 'react';
const DEFAULT_AVATAR = '/src/assets/images/Image.png'
const AvatarContext = createContext({
    avatar: DEFAULT_AVATAR,
    setAvatar: () => {},
});

export const AvatarProvider = ({ children }) => {
    const [avatar, setAvatar] = useState(DEFAULT_AVATAR);
    return (
    <AvatarContext.Provider value={{ avatar, setAvatar }}>
        {children}
    </AvatarContext.Provider>
  );
};

export const useAvatar = () => useContext(AvatarContext);