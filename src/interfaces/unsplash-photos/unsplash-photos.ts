
export interface SponsorshipInterface{
    impression_urls: string[],
    tagline: string,
    tagline_url: string,
    sponsor: {
        id: string,
        updated_at: string,
        username: string,
        name: string,
        first_name: string,
        last_name: null|string,
        twitter_username:string,
        portfolio_url: string,
        bio: string,
        location: null|any,
        links: {
            self: string,
            html: string,
            photos: string,
            likes: string,
            portfolio: string,
            following: string,
            followers: string
        },
        profile_image: {
            small: string,
            medium: string,
            large: string
        },
        instagram_username: string,
        total_collections: number,
        total_likes: number,
        total_photos: number,
        accepted_tos: boolean,
        for_hire: boolean,
        social: {
            instagram_username: string,
            portfolio_url: string,
            twitter_username: string,
            paypal_email: null|any
        }
    }
}

export interface UserInterface{
    id: string,
    updated_at: string,
    username: string,
    name: string,
    first_name: string,
    last_name: null|any,
    twitter_username: string,
    portfolio_url: string,
    bio: string,
    location: null|any,
    links: {
        self: string,
        html: string,
        photos: string,
        likes: string,
        portfolio: string,
        following: string,
        followers: string
    },
    profile_image: {
        small: string,
        medium: string,
        large: string
    },
    instagram_username: string,
    total_collections: number,
    total_likes: number,
    total_photos: number,
    accepted_tos: boolean,
    for_hire: boolean,
    social: {
        instagram_username: string,
        portfolio_url: string,
        twitter_username: string,
        paypal_email: null|any
    }
}

export interface UnsplashGetAllPhotoDataInterface{
    id: string,
    created_at: string,
    updated_at:string,
    promoted_at: null|any,
    width: number,
    height: number,
    color: string,
    blur_hash: string,
    description: null|any,
    alt_description: null|any,
    urls: {
        raw: string,
        regular: string,
        small: string,
        thumb: string,
        small_s3: string
    },
    links: {
        self: string,
        html: string,
        download: string,
        download_location: string
    },
    likes: number,
    liked_by_user: boolean,
    current_user_collections: [],
    sponsorship: SponsorshipInterface,
    topic_submissions: any,
    user: UserInterface
}

