import * as React from 'react'
import './HelloWorld.css'

interface HelloWorldP {
    name: string
}

interface HelloWorldS {

}

export class HelloWorld extends React.Component<HelloWorldP, HelloWorldS> {
    constructor(props: HelloWorldP) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div
                style={{
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 64
                }} >
                你好，{this.props.name}!
            </div>
        )
    }
}