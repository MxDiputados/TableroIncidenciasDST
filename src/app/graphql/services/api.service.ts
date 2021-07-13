import { Injectable } from '@angular/core';
import { DocumentNode } from '@apollo/client';
import { Apollo } from 'apollo-angular/apollo';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private apollo: Apollo) { }

  // variables: object = {} a qui van nuestras variables por ejemplo el id que utilizaremos en detalles
  protected query(
    query: DocumentNode,
    variables: object = {},
    context: object = {}
  ) {
    // devolviendo la informacion de la consulta
    return this.apollo
      .watchQuery({
        query,
        variables,
        context,
        fetchPolicy: 'network-only',
      })
      .valueChanges.pipe(
        map((result) => {
          return result.data;
        })
      );
  }

  protected mutation(
    mutation: DocumentNode,
    variables: object = {},
    context: object = {}
  ) {
    // devolviendo la informacion de la consulta
    return this.apollo
      .mutate({
        mutation,
        variables,
        context,

      })
      .pipe(
        map((result) => {
          return result.data;
        })
      );
  }


}
