interface Window {
  posthog: {
    init: (token: string, options?: { api_host?: string, ui_host?: string, person_profiles?: string }) => void;
    capture: (event: string, data?: { [key: string]: any }) => void;
  }
};
