import "../assets/styles/footer.less";

export default{
    data(){
        return{
            author:"时光小溪"
        }
    },
    render(){
        return (
            <div id="footer">
                <span>Written by {this.author}</span>
            </div>
        )
    }
}