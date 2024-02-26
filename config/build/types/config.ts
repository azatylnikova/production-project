export type BuildMode = 'production' | 'development'

export interface BuildPuths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface buildEnv {
    mode: BuildMode
    port: number
}

export interface BuildOptions {
    mode: BuildMode,
    paths: BuildPuths,
    isDev: boolean,
    port: number

}
