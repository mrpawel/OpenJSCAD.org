/**
 * Created by pmikolajczyk on 8/13/15.
 */

Config = {};

Config.getLinesShader = function(){
    return Shaders.getBlackShader();
}
Config.getWorldShader = function(){
    return Shaders.getDepthShaderShallow();
};
