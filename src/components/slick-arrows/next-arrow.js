import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const NextArrow = (props) => {
    const { className, onClick } = props;
    return(
      <div onClick={onClick} className={`arrow ${className}`} >
        <ChevronRightIcon class="arrows" style={{color:"white"}}/>
      </div>
    )
}

export default NextArrow;