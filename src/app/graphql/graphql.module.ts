import {NgModule} from '@angular/core';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, ApolloLink, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import {onError} from '@apollo/client/link/error'
const uri = 'https://micrositios.diputados.gob.mx:4001/graphql'; // <-- add the URL of the GraphQL server here
// const uri = 'http://localhost:4001/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink):ApolloClientOptions<any> {
  const errorLink = onError(({graphQLErrors, networkError}) => {
    if(graphQLErrors){
      console.log('graphQL Error',graphQLErrors )
    }
    if(networkError){
      console.log('Network Error',networkError )
    }
  });
  return {
    link:ApolloLink.from([httpLink.create({uri})]) ,
    cache: new InMemoryCache(),
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
