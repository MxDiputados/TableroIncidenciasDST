import gql from "graphql-tag"

export const CHARACTER_OBJECT = gql`
    fragment CharacterObjet on Character {
        id
        name
        actor @skip(if: $skip)
        description @skip(if: $skip)
        total_episodes @skip(if: $skip)
        photo @skip(if: $skip)
        votes
        url @skip(if: $skip)
        
    }

`;