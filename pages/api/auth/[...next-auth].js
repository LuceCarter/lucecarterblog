import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
    providers: [
        Providers.Spotify({
            scope:
                "user-read-currently-playing user-read-recently-played user-read-playback-state",
            clientId: process.env.SPOTIFY_CLIENT_ID,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
            profile(profile) {
                return {
                  id: profile.id,
                  name: profile.display_name,
                  email: profile.email,
                  image: profile.images?.[0]?.url,
                };
              },         
        })
    ]
});