import Twitter  from 'icons/Twietter.svg';
import Facebook from "icons/Facebook.svg"
import { Body } from '@/ui/texts';
import styled from 'styled-components';

const TweetIcon = styled(Twitter)`
    width: 18px;
    height: 18px;
    margin-right: 5px;
`
const FaceIcon = styled(Facebook)`
    width: 18px;
    height: 18px;
    margin-right: 5px;
`
const Tweet = () => {
    return (
    <Body><TweetIcon></TweetIcon>Twitter</Body>
    
  )
}
const Face = () => {
    return (
    <Body><FaceIcon></FaceIcon>Facebook</Body>
    
  )
}

export {
    Tweet,Face
}


