import UseNavigation from '../hooks/use-navigation'
export default function Route({path,children}){
    const {currentPath}=UseNavigation();
if(path===currentPath){
    return children;
}else return null

}