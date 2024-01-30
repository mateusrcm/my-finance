/**
 * Interface that represents an object with "any" props, 
 * should used in circumstances where we don't know what 
 * is going to be the exact props for the desired object
 */
export interface GenericObject {
  [prop: string]: any;
}
