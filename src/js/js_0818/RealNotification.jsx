import React from 'react';
class Notification extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <span>
                    {this.props.message}
                </span>
            </div>
        );
    }
}


const reservedNotifications = [
    {
        message: 'hi'
    },
    {
        message: 'seconds'
    },
    {
        message: 'last'
    }
]
var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [],
        };
    }

    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);
    }

    componentWillUnmount() {
        if (timer) {
            clearInterval(timer);
        }
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return <Notification message= {notification.message}/>;
                })}
            </div>
        );
    }
}



const RealNotification = () => {



    return (
        <>
            <NotificationList/>
        </>
    );
};

export default RealNotification;