var documenterSearchIndex = {"docs":
[{"location":"hits/#Working-with-Hits-1","page":"Working with Hits","title":"Working with Hits","text":"","category":"section"},{"location":"hits/#","page":"Working with Hits","title":"Working with Hits","text":"Modules = [NeRCA]\nPages = [\"hits.jl\"]","category":"page"},{"location":"hits/#NeRCA.domhits-Union{Tuple{Array{T,1}}, Tuple{T}} where T<:NeRCA.DAQHit","page":"Working with Hits","title":"NeRCA.domhits","text":"function domhits(hits::Vector{T}) where {T<:Hit}\n\nSort hits by DOM ID and put them into a dictionary.\n\n\n\n\n\n","category":"method"},{"location":"hits/#NeRCA.duhits-Union{Tuple{Array{T,1}}, Tuple{T}} where T<:CalibratedHit","page":"Working with Hits","title":"NeRCA.duhits","text":"function duhits(hits::Vector{T}) where {T<:CalibratedHit}\n\nSort hits by DU and put them into a dictionary.\n\n\n\n\n\n","category":"method"},{"location":"hits/#NeRCA.nfoldhits-Union{Tuple{T}, Tuple{Array{T,1},Any,Any}} where T<:NeRCA.DAQHit","page":"Working with Hits","title":"NeRCA.nfoldhits","text":"function nfoldhits(hits::Vector{T}, Δt, n) where {T<:Hit}\n\nCreate a Vector with hits contributing to n-fold coincidences within a time window of Δt.\n\n\n\n\n\n","category":"method"},{"location":"hits/#NeRCA.triggered-Union{Tuple{Array{T,1}}, Tuple{T}} where T<:NeRCA.DAQHit","page":"Working with Hits","title":"NeRCA.triggered","text":"function triggered(hits::Vector{T}) where {T<:Hit}\n\nReturn a Vector of triggered hits.\n\n\n\n\n\n","category":"method"},{"location":"hits/#NeRCA.count_multiplicities!","page":"Working with Hits","title":"NeRCA.count_multiplicities!","text":"function count_multiplicities!(hits::Vector{CalibratedHit}, tmax=20)\n\nCounts the multiplicities and modifies the .multiplicity field of the hits. Important: the hits have to be sorted by time and then by DOM ID first.\n\n\n\n\n\n","category":"function"},{"location":"hits/#NeRCA.count_multiplicities-Union{Tuple{Array{T,1}}, Tuple{T}, Tuple{Array{T,1},Any}} where T<:NeRCA.AbstractHit","page":"Working with Hits","title":"NeRCA.count_multiplicities","text":"function count_multiplicities(hits::Vector{T}, tmax=20) where {T<:AbstractHit}\n\nCalculate the multiplicities for a given time window. Two arrays are are returned, one contains the multiplicities, the second one the IDs of the coincidence groups. The hits should be sorted by time and then by dom_id.\n\n\n\n\n\n","category":"method"},{"location":"hits/#NeRCA.totcut-Union{Tuple{T}, Tuple{Array{T,1},Any}} where T<:NeRCA.DAQHit","page":"Working with Hits","title":"NeRCA.totcut","text":"function totcut(hits::Vector{T}, tot) where {T<:DAQHit}\n\nReturn a vector of hits with ToT >= tot.\n\n\n\n\n\n","category":"method"},{"location":"fit/#ROyFit-1","page":"ROyFit","title":"ROyFit","text":"","category":"section"},{"location":"fit/#","page":"ROyFit","title":"ROyFit","text":"Modules = [NeRCA]\nPages = [\"fit.jl\"]","category":"page"},{"location":"fit/#NeRCA.svdfit-Tuple{Array{CalibratedHit,1}}","page":"ROyFit","title":"NeRCA.svdfit","text":"function svdfit(hits::Vector{CalibratedHit})\n\nUses SVD to do a fast and dirty track prefit. Provide hits with a multiplicity of at least 2.\n\n\n\n\n\n","category":"method"},{"location":"fit/#NeRCA.make_cherenkov_calculator-NTuple{5,Any}","page":"ROyFit","title":"NeRCA.make_cherenkov_calculator","text":"function make_cherenkov_calculator(d_closest, t_closest, z_closest, dir_z, t₀)\n\nReturns a function which calculates the arrival time of a Cherenkov photon at a given position.\n\n\n\n\n\n","category":"method"},{"location":"fit/#NeRCA.make_cherenkov_calculator-Tuple{NeRCA.SingleDUParams}","page":"ROyFit","title":"NeRCA.make_cherenkov_calculator","text":"function make_cherenkov_calculator(sdp::SingleDUParams)\n\nReturns a function which calculates the arrival time of a Cherenkov photon at a given position.\n\n\n\n\n\n","category":"method"},{"location":"fit/#NeRCA.make_cherenkov_calculator-Tuple{NeRCA.Track,Union{DAQEventInfo, MCEventInfo}}","page":"ROyFit","title":"NeRCA.make_cherenkov_calculator","text":"function make_cherenkov_calculator(track::Track, event_info::Union{MCEventInfo,DAQEventInfo}; v=2.99792458e8)\n\nReturns a function which calculates the arrival time of a Cherenkov photon at a given position.\n\n\n\n\n\n","category":"method"},{"location":"fit/#NeRCA.make_cherenkov_calculator-Tuple{NeRCA.Track}","page":"ROyFit","title":"NeRCA.make_cherenkov_calculator","text":"function make_cherenkov_calculator(track::Track; v=2.99792458e8)\n\nReturns a function which calculates the arrival time of a Cherenkov photon at a given position.\n\n\n\n\n\n","category":"method"},{"location":"fit/#NeRCA.prefit-Tuple{Array{CalibratedHit,1}}","page":"ROyFit","title":"NeRCA.prefit","text":"function prefit(hits::Vector{CalibratedHit})\n\nPerforms the prefit algorithm which was used in DUMAND II.\n\n\n\n\n\n","category":"method"},{"location":"fit/#NeRCA.single_du_params-Tuple{MCTrack,Any}","page":"ROyFit","title":"NeRCA.single_du_params","text":"function single_du_params(t::NeRCA.MCTrack)\n\nCalculates five parameters to describe a MC track for a single DU case.\n\n\n\n\n\n","category":"method"},{"location":"fit/#NeRCA.single_du_params-Tuple{NeRCA.Track}","page":"ROyFit","title":"NeRCA.single_du_params","text":"function single_du_params(track::NeRCA.Track)\n\nCalculates five parameters to describe a track for a single DU case.\n\n\n\n\n\n","category":"method"},{"location":"fit/#NeRCA.slew-Tuple{Any}","page":"ROyFit","title":"NeRCA.slew","text":"function slew(tot)\n\nReturn the time slewing for a ToT.\n\n\n\n\n\n","category":"method"},{"location":"#NeRCA.jl-Package-1","page":"NeRCA.jl Package","title":"NeRCA.jl Package","text":"","category":"section"},{"location":"#","page":"NeRCA.jl Package","title":"NeRCA.jl Package","text":"","category":"page"},{"location":"io/#I/O-Related-Functions-1","page":"I/O Related Functions","title":"I/O Related Functions","text":"","category":"section"},{"location":"io/#","page":"I/O Related Functions","title":"I/O Related Functions","text":"Modules = [NeRCA]\nPages = [\"io.jl\"]","category":"page"},{"location":"io/#NeRCA.read_compound-Tuple{HDF5.HDF5Dataset,DataType}","page":"I/O Related Functions","title":"NeRCA.read_compound","text":"function read_compound(dset::HDF5.HDF5Dataset, T::DataType)\n\nRead an HDF5Compund structure from an HDF5 dataset.\n\n\n\n\n\n","category":"method"}]
}
