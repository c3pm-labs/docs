import { useColorMode } from '@chakra-ui/core';
import { ImgHTMLAttributes } from 'react';

const Logo = (props: ImgHTMLAttributes<any>): JSX.Element => {
  const { colorMode } = useColorMode();
  return (
    <a href="https://c3pm.io/">
      {colorMode === 'light' ? (
        <img alt="c3pm" src="/logo/c3pm.png" {...props} />
      ) : (
        <img alt="c3pm" src="/logo/c3pm_white.png" {...props} />
      )}
    </a>
  );
};

export default Logo;
