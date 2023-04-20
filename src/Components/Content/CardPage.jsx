import Cards from './Cards';
import './card.css';


const CardPage = (props) => {
  const {data,searched,handleShowMore} = props;

  return (
    <>
      {searched ? <>
        <div className='cards-container'>
          {data.map((result, index)=>{
            return (
              <Cards 
              imageSrc={result.urls.small}
              imageAlt={result.alt_description}
              imageHref={result.links.html}
              imageTarget="_blank"
              imageContent={result.alt_description}
              />
            );
          })}
        </div>
        <div style={{display:"flex",justifyContent:"center",marginBottom:"20px"}}>
          <button className='show-more-btn' onClick={handleShowMore}>Show more</button> 
        </div>
      </>: null}
    </>
  )
}

export default CardPage


