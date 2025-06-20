const base = {
    get() {
        return {
            url : "http://localhost:8080/emmsys/",
            name: "emmsys",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/emmsys/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "疫情物资管理系统"
        } 
    }
}
export default base
