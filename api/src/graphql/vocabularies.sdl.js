export const schema = gql`
  type Vocabulary {
    id: String!
    word: String!
    furigana: String!
    jlpt: Int!
    author: User!
    userId: String!
    VocabularySentence: [VocabularySentence]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }
`
