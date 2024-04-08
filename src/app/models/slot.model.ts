export interface GameModel {
    game_id: string;
    name: string;
    provider: string;
    providerName: string;
    image: string;
    url: string;
    order: number;
    tags: string[];
    stats: any[];
    favoriteCount: number;
    imageSet: {
        blurhash: string | null;
        original: string;
        webp: string;
    };
    remoteId: string;
    gameId: string;
    image2: string;
}

export interface GetSlotCategoriesModel {
  data: Array<{
    type: string;
    category: string;
    platform: string;
    name: string;
    order: number;
    games: GameModel[]
  }>;
}

export interface GetSlotProvidersModel {
    data: Array<{
        _id: string;
        name: string;
        iframeW: number;
        iframeH: number;
        vendor: string;
        provider: string;
        type: string;
        order: number;
        enabled: boolean;
        logo: string;
        tags: string[];
        gamesCount: number;
    }>;
}

export interface GetSlotsByProviderModel {
    data: {
        type: string;
        provider: string;
        vendor: string;
        iframeW: number;
        iframeH: number;
        name: string;
        order: number;
        tags: string[];
        games: GameModel[];
    }
}