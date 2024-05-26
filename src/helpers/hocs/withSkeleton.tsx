import Skeleton from "../../components/Skeleton/Skeleton";
import { DirectionType, SkeletonType } from '../../interfaces/index';

interface Props {
    isLoading: boolean;
    bottom?: boolean;
    children?: React.ReactNode;
}

function withSkeleton<P extends object >(
    Component: React.ComponentType<P>, 
    type?: SkeletonType, 
    count?: number, 
    direction?: DirectionType
    ) {
    return function withSkeleton(props: Props & P){
        const {isLoading, ...restProps} = props;
        if (isLoading) {
            return <Skeleton type={type} count={count} direction={direction}/>
        }
        return <Component {...(restProps as P)}/>
    }
};

export default withSkeleton;