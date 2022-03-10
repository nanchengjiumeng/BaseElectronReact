declare module 'download' {
  interface DownloadOptions {
    extract?: boolean | undefined;
    filename?: string | undefined;
  }

  function download(
    url: string,
    destination?: string,
    options?: DownloadOptions
  ): Promise<Buffer>;

  export = download;
}
