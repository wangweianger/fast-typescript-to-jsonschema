export interface AAA {
  other1: string;
}
export interface BBB {
  other10: string;
}

export enum Label {
  // 枚举
  LABEL_OPTIONAL = 1,
  LABEL_REQUIRED = 2,
  LABEL_REPEATED = 3,
}

export namespace Param {
  export namespace C {
    export namespace D {
      export namespace E {
        export namespace F {
          export interface GetBaseDetailResponse {
            id: string;
          }
        }
      }
    }
  }
}

export namespace Param_1 {
  export enum Label {
    // 枚举
    LABEL_OPTIONAL = 1,
    LABEL_REQUIRED = 2,
    LABEL_REPEATED = 3,
  }
  export interface A {
    name: string;
  }
}

export namespace ParamsRule {
  export interface Level {
    a?: boolean;
    b?: boolean;
    c?: boolean;
    d?: boolean;
  }

  export enum PEnum {
    'enum0' = 'enum0'
  }

  export interface PObject {
    a: Level;
    b?: PEnum;
    c?: PEnum[];
  }

  export interface PAll {
    level?: Level;
    pObject?: PObject;
  }
}