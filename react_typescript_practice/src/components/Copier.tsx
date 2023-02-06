import React, { ReactNode } from 'react'

type CopierProps = {
    quotes: string[]
}

type CopierStates = {
    currentIndex: number
}

export default class Copier extends React.Component<CopierProps, CopierStates> {
    state: Readonly<CopierStates> = {
        currentIndex: 0
    }

    getIndex = (): number => {
        return Math.floor(Math.random() * (this.props.quotes.length));
    }

    getNextQuote = (): void => {
        this.setState({currentIndex: this.getIndex()})
    }

    render(): ReactNode {
        const quoteToDisplay = this.props.quotes[this.state.currentIndex]
        return (
            <div>
                <h4>{quoteToDisplay}</h4>
                <button onClick={this.getNextQuote}>Next random quote</button>
            </div>
        )
    }
}