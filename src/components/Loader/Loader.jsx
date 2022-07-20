import { Rings } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export function Loader(){
    return (
        <LoaderContainer>
            <Rings
                ariaLabel='loading'
                height="100"
                width="100"
                strokeColor="#FF5733"
                strokeWidth="1"
                animationDuration="3"
            />
        </LoaderContainer>);
};