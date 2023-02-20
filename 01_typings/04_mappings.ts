namespace Options_Verbose { // modern ES lets us use the keyword 'namespace'
    interface Options {
        material: string
        backlight:boolean
    }
    // read-only version
    interface ManualReadOnlyOptions {
        readonly material:string
        readonly backlight:boolean
    }
    // optional version
    interface ManualOptionalOptions {
        material?:string
        backlight?:boolean
    }
    // nullable version
    interface ManualNullableOptions {
        material:string | null
        backlight:boolean | null
    }
}

namespace Options_Terse {
    interface Options { // our 'base' type
        material: string
        backlight:boolean
    }
    // we can use mapping to make new types from our 'base' type
    type ReadOnlyOptions<T> = { readonly [k in keyof T]: T[k] }
    type OptionalOptions<T> = { [k in keyof T]? : T[k] }
    type NullableOptions<T> = { [k in keyof T] : T[k] | null }

    // then...
    type ReadOnly = ReadOnlyOptions<Options> // we explicitly set 'T' to Options here
    type Optional = OptionalOptions<Options>
    type Nullable = NullableOptions<Options>

    // make use of our mapped types
    const brick:ReadOnly = {
        backlight:false,
        material:'brick'
    }
    // brick.material = 'changed' // nope
    const gauze:Nullable = {
        material:'gauze',
        backlight:true
    }
    gauze.backlight = null // yep

    const silk:Optional = {
        backlight:true
    }

}