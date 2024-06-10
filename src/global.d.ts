interface Window {
  posthog: {
    capture: (event: string, data?: { [key: string]: any }) => void;
  }
};
