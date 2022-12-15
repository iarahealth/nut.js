/**
 * {@link ClipboardClass} class gives access to a systems clipboard
 */
import { ProviderRegistry } from "./provider/provider-registry.class";

export class ClipboardClass {
  /**
   * {@link ClipboardClass} class constructor
   * @param providerRegistry
   */
  constructor(private providerRegistry: ProviderRegistry) {}

  /**
   * {@link copy} copies a given text to the system clipboard
   * @param text The text to copy
   */
  public copy(text: string): Promise<void> {
    this.providerRegistry.getLogProvider().debug(`Saving to clipboard`);
    return this.providerRegistry.getClipboard().copy(text);
  }

  /**
   * {@link paste} returns the current content of the system clipboard (limited to text)
   */
  public paste(): Promise<string> {
    this.providerRegistry.getLogProvider().debug(`Fetching clipboard content`);
    return this.providerRegistry.getClipboard().paste();
  }
}
