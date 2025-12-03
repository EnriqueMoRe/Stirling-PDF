import { useEffect } from 'react';
import { useAppConfig } from '@app/contexts/AppConfigContext';
import { updateSupportedLanguages, applyDefaultLocale } from '@app/i18n';

/**
 * Component that loads app configuration and applies it to the application.
 * This includes:
 * - Filtering available languages based on config.languages
 * - Applying the server's default locale when user has no preference
 *
 * Place this component high in the component tree, after i18n has initialized.
 */
export default function AppConfigLoader() {
  const { config, loading } = useAppConfig();

  useEffect(() => {
    if (!loading && config) {
      // Update supported languages if config specifies a language filter
      updateSupportedLanguages(config.languages);
      // Apply server's default locale (only if user hasn't set a preference)
      applyDefaultLocale(config.defaultLocale);
    }
  }, [config, loading]);

  // This component doesn't render anything
  return null;
}
