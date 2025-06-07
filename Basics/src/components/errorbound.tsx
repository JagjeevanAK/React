import React from 'react';

interface Props {
    children: React.ReactNode;
}

interface State {
    hasError: boolean;
}

// This class avoid's the website from craching down and provides error message for that down component and keep's the whole system running.

export class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        console.error("Error caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}

// const BuggyComponent = () => {
//     throw new Error("I crashed!");
// };



// below are the testing functions

export function Card1(){
    throw new Error("Error while Rendering");
    return (
        <div style={{background:"red", borderRadius:20, padding:20, margin:20}}>
            Hello
        </div>
    )
}

export function Card2(){
    return(
        <div style={{background:"black", borderRadius:20, padding:20, margin:20, color: "white"}}>
            hello
        </div>
    )
}