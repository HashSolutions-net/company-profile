import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
const PrevArrow = (props) => {
    const { className, onClick } = props;
    return(
      <div onClick={onClick} className={`arrow ${className}`} >
        <ChevronLeftIcon class="arrows" style={{color:"white"}}/>
      </div>
    )
}

export default PrevArrow;