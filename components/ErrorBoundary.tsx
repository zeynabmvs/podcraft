// components/ErrorBoundary.tsx
import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  // This lifecycle method is called when an error is thrown
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  // This method is called when an error is caught
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught in Error Boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render the fallback component when there's an error
      return <>{this.props.fallback}</>;
    }

    // Otherwise, render the children components
    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;
