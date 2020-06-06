class Image extends React.Component{
    render(){
        const{ ix, clickImage, active } = this.props;
        const style = active ? {border: '1px solid black'}:{};
        return <img 
        style ={style} 
        src = 'anjeng.jpg' 
        onClick={()=> clickImage(ix)}
        />

    }
}

export default Image;