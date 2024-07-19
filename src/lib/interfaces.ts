interface PhotoData {
    data: {
        attributes: {
            url: string;
        }
    }
}

interface Attributes {
    title: string;
    description: string;
    publishedAt: string;
    slug: string;
    banner: PhotoData;
    Photo: PhotoData;
}

export default interface TravelData {
    id: number;
    attributes: Attributes;
}