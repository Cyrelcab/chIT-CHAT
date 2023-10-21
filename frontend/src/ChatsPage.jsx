import {PrettyChatWindow} from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    return(
        <>
        <div style={{height: '100vh'}}>
            <PrettyChatWindow
                projectId='
                f52c370d-1a56-4fd4-ad46-d1406c4d2920'
                username={props.user.username}
                secret={props.user.secret}
                style={{height: '100%'}}
                />
        </div>
        </>
    )
}

export default ChatsPage