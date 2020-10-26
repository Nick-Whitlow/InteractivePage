d3.select("#Spelling")
    .on("click", function(){
d3.select("#questionList")
    .classed("hidden", false)
})

d3.select(".checkAnswer") 
    .on("click", function(){
    d3.selectAll("correct")
    .attr("class", "markCorrect")
        })

  d3.select(".reset")  
    .on("click",function()
    {
   d3.selectAll("correct")
    .attr("class", "normal")
})

