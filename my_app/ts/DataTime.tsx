import * as React from 'react'

interface person {
    name: string;
    time: Date;
}

export class DataTime extends React.Component<person, any>{

    render() {
        return (
            <p>
                <div>
                    Hello {this.props.name}<br /><br />
                    现在的时间是{this.props.time.toTimeString()}
                </div>;
            </p>
        )

    }
}